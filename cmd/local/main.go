package main

import (
	"asmaul-husna/pkg/configs"
	"asmaul-husna/pkg/middleware"
	"asmaul-husna/pkg/server"

	"github.com/gofiber/contrib/swagger"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

// Run project in local
func main() {
	server := server.New()
	server.RegisterFiberRoutes()

	server.Use(swagger.New(configs.SwgCfg))
	server.Use(middleware.PrometheusMiddleware())
	server.Use("/metrics", adaptor.HTTPHandler(promhttp.Handler()))

	server.Listen(":5000")
}
