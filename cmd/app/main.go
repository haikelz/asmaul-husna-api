package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/haikelz/asmaul-husna-api/internal/routes"
)

func main() {
	app := fiber.New()

	// routes
	routes.FiberRoutes(app)

	app.Listen(":5000")
}
