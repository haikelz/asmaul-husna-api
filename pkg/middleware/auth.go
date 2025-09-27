package middleware

import (
	"asmaul-husna/pkg/utils"
	"strings"

	"github.com/gofiber/fiber/v2"
)

// Metrics route only accessible for those who have matched authorized token
func AuthMiddleware(c *fiber.Ctx) error {
	token := c.Get("Authorization")

	splitToken := strings.Split(token, " ")
	if len(splitToken) != 2 || splitToken[1] != utils.EnvVariables().AUTHORIZED_TOKEN {
		return utils.ErrorResponse(c, fiber.StatusUnauthorized, "Unauthorized")
	}

	return c.Next()
}
