package routes

import (
	"asmaul-husna/pkg/controllers"
	"asmaul-husna/pkg/services"

	"github.com/gofiber/fiber/v2"
)

func AsmaulHusnaRoute(api fiber.Router) {
	route := api.Group("/api")

	asmaulHusnaService := services.NewAsmaulHusnaService()
	asmaulHusnaController := controllers.NewAsmaulHusnaController(asmaulHusnaService)

	api.Get("/", asmaulHusnaController.HomeInfoHandler)

	route.Get("all", asmaulHusnaController.AllAsmaulHusnaHandler)
	route.Get("/latin/:latin", asmaulHusnaController.AsmaulHusnaBasedOnLatinHandler)
	route.Get("/:urutan", asmaulHusnaController.AsmaulHusnaBasedOnUrutanHandler)
}
