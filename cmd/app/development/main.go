package main

import (
	"asmaul-husna/pkg/configs"
	"asmaul-husna/pkg/server"
	"asmaul-husna/pkg/utils"
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gofiber/contrib/swagger"
)

// @title Asmaul Husna API
// @version 1.0
// @description Asmaul Husna API
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
// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization
// @description Enter the token with the `Bearer ` prefix."
func main() {
	server := server.New()
	server.RegisterFiberRoutes()

	server.Use(swagger.New(configs.SwgCfg))

	quit := make(chan os.Signal, 1)
	serverError := make(chan error, 1)

	signal.Notify(quit, os.Interrupt, syscall.SIGTERM)

	go func() {
		log.Println("Starting server on port", utils.EnvVariables().PORT)
		if err := server.Listen(":" + utils.EnvVariables().PORT); err != nil {
			serverError <- err
		}
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
