package utils

import (
	entities "asmaul-husna/pkg/entities/generated"
	"asmaul-husna/pkg/models"
	"asmaul-husna/pkg/models/responses"

	"github.com/gofiber/fiber/v2"
)

func ErrorResponse(c *fiber.Ctx, statusCode int, message string) error {
	response := models.APIErrorResponse{
		StatusCode: int32(statusCode),
		Message:    message,
	}

	return c.Status(statusCode).JSON(&response)
}

func SuccessResponse(c *fiber.Ctx, statusCode int, total int, data *responses.AsmaulHusna) error {
	response := models.APISuccessResponse{
		StatusCode: int32(statusCode),
		Total:      int32(total),
		Data:       data,
	}

	return c.Status(statusCode).JSON(&response)
}

func SuccessResponseAllAsmaulHusna(c *fiber.Ctx, statusCode int, total int, data *responses.AllAsmaulHusna) error {
	response := models.APISuccessResponseAllAsmaulHusna{
		StatusCode: int32(statusCode),
		Total:      int32(total),
		Data:       data,
	}

	return c.Status(statusCode).JSON(&response)
}

func HomeInfoResponse(c *fiber.Ctx, statusCode int, info *entities.HomeInfo) error {
	return c.Status(statusCode).JSON(&info)
}
