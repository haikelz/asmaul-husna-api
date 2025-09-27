package app

import (
	"asmaul-husna/pkg/configs"
	"asmaul-husna/pkg/server"
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gofiber/contrib/swagger"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
)

// @title Asmaul Husna API
// @version 1.0
// @description Asmaul Husna API
// @host https://asmaul-husna-api.vercel.app
// @basePath /
// @schemes http
// @consumes application/json
// @produces application/json
// @termsOfService http://swagger.io/terms/
// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html
// Handle deployment to Vercel Serverless
func Handler(w http.ResponseWriter, r *http.Request) {
	// IMPORTANT: Don't delete this line or your pagination logic will not properly work
	r.RequestURI = r.URL.String()

	server := server.New()
	server.RegisterFiberRoutes()
	server.Use(swagger.New(configs.SwgCfg))

	quit := make(chan os.Signal, 1)
	serverError := make(chan error, 1)

	signal.Notify(quit, os.Interrupt, syscall.SIGTERM)

	go func() {
		adaptor.FiberApp(server.App).ServeHTTP(w, r)
	}()

	select {
	case err := <-serverError:
		log.Fatalf("Server error: %v", err)
	case <-quit:
		log.Printf("Shutting down server....")

		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()

		if err := server.ShutdownWithContext(ctx); err != nil {
			log.Fatalf("Server shutdown error: %v", err)
		} else {
			log.Println("Server shutdown complete")
		}
	}
}
