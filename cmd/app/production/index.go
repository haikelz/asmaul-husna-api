package app

import (
	"context"
	"encoding/json"
	"net/http"
	"strconv"
	"strings"

	grpcserver "asmaul-husna/pkg/grpc"
	"asmaul-husna/pkg/proto"
)

// @title Asmaul Husna API
// @version 1.0
// @description Asmaul Husna API with gRPC-style service logic
// @host asmaul-husna-api.vercel.app
// @basePath /
// @schemes https
// @consumes application/json
// @produces application/json
// @termsOfService http://swagger.io/terms/
// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// server instance (reused across requests for efficiency)
var server = grpcserver.NewServer()

// Handler handles HTTP requests for Vercel serverless deployment
// Note: gRPC (HTTP/2) cannot run on Vercel, so we use HTTP/1.1 REST
// while internally using the same gRPC service logic
func Handler(w http.ResponseWriter, r *http.Request) {
	// Set CORS and JSON headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")

	// Handle preflight
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	path := r.URL.Path
	ctx := context.Background()

	// Route handling
	switch {
	case path == "/" || path == "":
		handleHomeInfo(ctx, w)

	case path == "/api/all":
		handleGetAll(ctx, w, r)

	case strings.HasPrefix(path, "/api/latin/"):
		latin := strings.TrimPrefix(path, "/api/latin/")
		handleGetByLatin(ctx, w, latin)

	case strings.HasPrefix(path, "/api/"):
		urutan := strings.TrimPrefix(path, "/api/")
		handleGetByUrutan(ctx, w, urutan)

	default:
		writeError(w, http.StatusNotFound, "Endpoint not found")
	}
}

func handleHomeInfo(ctx context.Context, w http.ResponseWriter) {
	resp, err := server.GetHomeInfo(ctx, &proto.HomeInfoRequest{})
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, resp)
}

func handleGetAll(ctx context.Context, w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query()
	page, _ := strconv.Atoi(query.Get("page"))
	limit, _ := strconv.Atoi(query.Get("limit"))

	resp, err := server.GetAllAsmaulHusna(ctx, &proto.GetAllRequest{
		Page:  int32(page),
		Limit: int32(limit),
	})
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, resp)
}

func handleGetByUrutan(ctx context.Context, w http.ResponseWriter, urutanStr string) {
	urutan, err := strconv.Atoi(urutanStr)
	if err != nil {
		writeError(w, http.StatusBadRequest, "Invalid urutan parameter")
		return
	}

	resp, err := server.GetAsmaulHusnaByUrutan(ctx, &proto.GetByUrutanRequest{
		Urutan: int32(urutan),
	})
	if err != nil {
		writeError(w, http.StatusBadRequest, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, resp)
}

func handleGetByLatin(ctx context.Context, w http.ResponseWriter, latin string) {
	resp, err := server.GetAsmaulHusnaByLatin(ctx, &proto.GetByLatinRequest{
		Latin: latin,
	})
	if err != nil {
		writeError(w, http.StatusBadRequest, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, resp)
}

// Helper functions

func writeJSON(w http.ResponseWriter, status int, data interface{}) {
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(data)
}

func writeError(w http.ResponseWriter, status int, message string) {
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"statusCode": status,
		"message":    message,
	})
}
