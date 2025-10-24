package routes

import (
	"asmaul-husna/pkg/controllers"
	"asmaul-husna/pkg/services"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

func AsmaulHusnaRoute(api fiber.Router) {
	route := api.Group("/api")

	asmaulHusnaService := services.NewAsmaulHusnaService()
	asmaulHusnaController := controllers.NewAsmaulHusnaController(asmaulHusnaService)

	api.Get("/", asmaulHusnaController.HomeInfoHandler)

	api.Use("/metrics", adaptor.HTTPHandler(promhttp.Handler()))
	route.Get("all", asmaulHusnaController.AllAsmaulHusnaHandler)
	route.Get("/latin/:latin", asmaulHusnaController.AsmaulHusnaBasedOnLatinHandler)
	route.Get("/:urutan", asmaulHusnaController.AsmaulHusnaBasedOnUrutanHandler)
}
