package middleware

import (
	"asmaul-husna/pkg/configs"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
)

// Prometheus middleware for Fiber
func PrometheusMiddleware() fiber.Handler {
	return func(c *fiber.Ctx) error {
		start := time.Now()
		method := c.Method()
		path := c.Path()

		configs.MetricActiveRequests.Inc()
		defer configs.MetricActiveRequests.Dec()

		err := c.Next()

		status := strconv.Itoa(c.Response().StatusCode())
		duration := time.Since(start).Seconds()

		configs.MetricHttpRequestsTotal.WithLabelValues(method, path, status).Inc()
		configs.MetricHttpRequestDuration.WithLabelValues(method, path).Observe(duration)

		return err
	}
}
