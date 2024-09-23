package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/healthcheck"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	"github.com/haikelz/asmaul-husna-api/internal/routes"
)

func main() {
	app := fiber.New()

	// handle CORS
	app.Use(cors.New())

	// helmet
	app.Use(helmet.New())

	// logger
	app.Use(logger.New(logger.Config{Format: "${ip} ${pid} ${locals:requestid} ${status} - ${method} ${path}\n"}))

	// healthcheck
	app.Use(healthcheck.New())

	// monitoring API
	app.Get("/metrics", monitor.New())

	// routes
	routes.FiberRoutes(app)

	app.Listen(":5000")
}
