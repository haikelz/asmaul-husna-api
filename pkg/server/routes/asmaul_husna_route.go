package routes

import (
	"asmaul-husna-golang/pkg/controllers"
	"asmaul-husna-golang/pkg/services"

	"github.com/gofiber/fiber/v2"
)

func AsmaulHusnaRoute(api fiber.Router) {
	asmaulHusnaService := services.NewAsmaulHusnaService()
	asmaulHusnaController := controllers.NewAsmaulHusnaController(asmaulHusnaService)

	api.Get("all", asmaulHusnaController.AllAsmaulHusnaHandler)
	api.Get("/latin/:latin", asmaulHusnaController.AsmaulHusnaBasedOnLatinHandler)
	api.Get("/:urutan", asmaulHusnaController.AsmaulHusnaBasedOnUrutanHandler)
}
