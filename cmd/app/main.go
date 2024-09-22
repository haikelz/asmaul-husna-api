package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/haikelz/asmaul-husna-api/internal/entities"
)

type AllAsmaulHusnaResponse struct {
	entities.BaseResponse
	Total int                    `json:"total"`
	Data  []entities.AsmaulHusna `json:"data"`
}

type AsmaulHusnaDetailResponse struct {
	entities.BaseResponse
	Total int                  `json:"total"`
	Data  entities.AsmaulHusna `json:"data"`
}

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(entities.HomeResponse{Author: "Haikel Ilham Hakim", Repository: "https://github.com/haikelz/asmaul-husna-api", Endpoints: entities.HomeEndpoints{All: "/api/all", Urutan: "/api/:urutan", Latin: "/api/latin/:latin"}})
	})

	app.Get("/api/all", func(c *fiber.Ctx) error {
		return c.JSON(AllAsmaulHusnaResponse{BaseResponse: entities.BaseResponse{StatusCode: 200}, Total: 99, Data: []entities.AsmaulHusna{}})
	})

	app.Get("/api/latin/:latin", func(c *fiber.Ctx) error {
		return c.JSON(AsmaulHusnaDetailResponse{BaseResponse: entities.BaseResponse{StatusCode: 200}, Total: 1, Data: entities.AsmaulHusna{}})
	})

	app.Get("/api/:urutan", func(c *fiber.Ctx) error {

		return c.JSON(AsmaulHusnaDetailResponse{BaseResponse: entities.BaseResponse{StatusCode: 200}, Total: 1, Data: entities.AsmaulHusna{}})
	})
}
