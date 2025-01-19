package server

import (
	"asmaul-husna/pkg/entities"
	"asmaul-husna/pkg/server/routes"

	"github.com/gofiber/fiber/v2"
)

func (s *FiberApp) RegisterFiberRoutes() {
	api := s.App.Group("/api")

	s.App.Get("/", s.HomeHandler)
	routes.AsmaulHusnaRoute(api)
}

func (s *FiberApp) HomeHandler(c *fiber.Ctx) error {
	response := entities.HomeInfo{
		Author:     "Haikel Ilham Hakim",
		Repository: "https://github.com/haikelz/asmaul-husna-api",
		Endpoints: entities.EndpointsInfo{
			All:    "/api/all",
			Urutan: "/api/:urutan",
			Latin:  "/api/latin/:latin",
		},
	}

	return c.Status(fiber.StatusOK).JSON(response)
}
