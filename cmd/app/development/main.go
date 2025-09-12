package main

import (
	"asmaul-husna/pkg/configs"
	"asmaul-husna/pkg/middleware"
	"asmaul-husna/pkg/server"

	"github.com/gofiber/contrib/swagger"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

// @title Asmaul Husna API
// @version 1.0
// @termsOfService http://swagger.io/terms/
// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html
func main() {
	server := server.New()
	server.RegisterFiberRoutes()

	server.Use(middleware.PrometheusMiddleware())
	server.Use("/metrics", adaptor.HTTPHandler(promhttp.Handler()))
	server.Use(swagger.New(configs.SwgCfg))

	server.Listen(":5000")
}
