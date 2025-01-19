package routes

import (
	"asmaul-husna/pkg/controllers"
	"asmaul-husna/pkg/services"

	"github.com/gofiber/fiber/v2"
)

func AsmaulHusnaRoute(api fiber.Router) {
	asmaulHusnaService := services.NewAsmaulHusnaService()
	asmaulHusnaController := controllers.NewAsmaulHusnaController(asmaulHusnaService)

	api.Get("all", asmaulHusnaController.AllAsmaulHusnaHandler)
	api.Get("/latin/:latin", asmaulHusnaController.AsmaulHusnaBasedOnLatinHandler)
	api.Get("/:urutan", asmaulHusnaController.AsmaulHusnaBasedOnUrutanHandler)
}
