package utils

import (
	"asmaul-husna/pkg/entities"
	"asmaul-husna/pkg/models"

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
	response := models.APISuccessResponse{
		StatusCode: statusCode,
		Total:      total,
		Data:       data,
	}

	return c.Status(statusCode).JSON(response)
}

func HomeInfoResponse(c *fiber.Ctx, statusCode int, info entities.HomeInfo) error {
	return c.Status(statusCode).JSON(info)
}
