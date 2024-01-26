package middleware

import (
	"github.com/gin-gonic/gin"
	"github.com/haikelz/asmaul-husna-api/error"
)

func GlobalErrorHandler() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.Next()

		err := ctx.Errors.Last()

		if err != nil {
			switch e := err.Err.(type) {
			case *error.CustomError:
				ctx.JSON(e.StatusCode, gin.H{
					"statusCode": e.StatusCode,
					"message":    e.Message,
				})
			default:
				ctx.JSON(500, gin.H{
					"error": err.Error(),
				})
			}

			ctx.Abort()
		}
	}
}
