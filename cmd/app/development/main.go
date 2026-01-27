package main

import (
	"context"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	grpcserver "asmaul-husna/pkg/grpc"
	"asmaul-husna/pkg/proto"
	"asmaul-husna/pkg/utils"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/reflection"
)

// @title Asmaul Husna API
// @version 1.0
// @description Asmaul Husna API with gRPC and REST (JSON) support
// @host localhost:8080
func main() {
	grpcPort := utils.EnvVariables().PORT
	if grpcPort == "" {
		grpcPort = "9090"
	}

	// HTTP/REST port (frontend will connect here)
	httpPort := "8080"

	// Start gRPC server
	go func() {
		if err := runGRPCServer(grpcPort); err != nil {
			log.Fatalf("gRPC server error: %v", err)
		}
	}()

	// Start REST/HTTP gateway
	go func() {
		if err := runHTTPGateway(httpPort, grpcPort); err != nil {
			log.Fatalf("HTTP gateway error: %v", err)
		}
	}()

	// Wait for shutdown signal
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, syscall.SIGTERM)
	<-quit

	log.Println("Shutting down servers...")
}

// runGRPCServer starts the gRPC server
func runGRPCServer(port string) error {
	lis, err := net.Listen("tcp", ":"+port)
	if err != nil {
		return err
	}

	srv := grpc.NewServer()
	proto.RegisterAsmaulHusnaServiceServer(srv, grpcserver.NewServer())
	reflection.Register(srv)

	log.Printf("🚀 gRPC server listening on port %s", port)
	return srv.Serve(lis)
}

// runHTTPGateway starts the REST/HTTP gateway that proxies to gRPC
func runHTTPGateway(httpPort, grpcPort string) error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	// Create gRPC-Gateway mux
	mux := runtime.NewServeMux(
		runtime.WithMarshalerOption(runtime.MIMEWildcard, &runtime.JSONPb{}),
	)

	opts := []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())}

	// Register the handler to proxy HTTP requests to gRPC
	err := proto.RegisterAsmaulHusnaServiceHandlerFromEndpoint(
		ctx,
		mux,
		"localhost:"+grpcPort,
		opts,
	)
	if err != nil {
		return err
	}

	// Create HTTP server with CORS support
	httpMux := http.NewServeMux()
	httpMux.Handle("/", corsMiddleware(mux))

	log.Printf("🌐 REST/JSON API listening on http://localhost:%s", httpPort)
	log.Printf("📖 Endpoints:")
	log.Printf("   GET /              - Home Info")
	log.Printf("   GET /api/all       - All Asma'ul Husna")
	log.Printf("   GET /api/{urutan}  - By Urutan (1-99)")
	log.Printf("   GET /api/latin/{latin} - By Latin Name")

	return http.ListenAndServe(":"+httpPort, httpMux)
}

// corsMiddleware adds CORS headers for frontend access
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}
