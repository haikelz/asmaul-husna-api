package utils

import (
	"asmaul-husna-golang/pkg/models"

	"github.com/gofiber/fiber/v2"
)

func ErrorResponse(c *fiber.Ctx, statusCode int, message string) error {
	response := models.APIErrorResponse{
		StatusCode: statusCode,
		Message:    message,
	}

	return c.Status(statusCode).JSON(response)
}

func SuccessResponse(c *fiber.Ctx, statusCode int, total int, data interface{}) error {
	response := models.APIResponse{
		StatusCode: statusCode,
		Total:      total,
		Data:       data,
	}

	return c.Status(statusCode).JSON(response)
}
