package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/haikelz/asmaul-husna-api/internal/entities"
	"github.com/haikelz/asmaul-husna-api/internal/usecases"
)

func FiberRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(entities.HomeResponse{Author: "Haikel Ilham Hakim", Repository: "https://github.com/haikelz/asmaul-husna-api", Endpoints: entities.HomeEndpoints{All: "/api/all", Urutan: "/api/:urutan", Latin: "/api/latin/:latin"}})
	})

	app.Get("/api/all", func(c *fiber.Ctx) error {
		return c.JSON(entities.AllAsmaulHusnaResponse{BaseResponse: entities.BaseResponse{StatusCode: 200}, Total: 99, Data: usecases.GetAll()})
	})

	app.Get("/api/latin/:latin", func(c *fiber.Ctx) error {
		return c.JSON(entities.AsmaulHusnaDetailResponse{BaseResponse: entities.BaseResponse{StatusCode: 200}, Total: 1, Data: usecases.GetDataBasedOnLatin(c)})
	})

	app.Get("/api/:urutan", func(c *fiber.Ctx) error {
		return c.JSON(entities.AsmaulHusnaDetailResponse{BaseResponse: entities.BaseResponse{StatusCode: 200}, Total: 1, Data: usecases.GetDataDasedOnUrutan(c)})
	})
}
