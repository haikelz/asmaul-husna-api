package configs

import (
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
)

// Define metrics
var (
	MetricHttpRequestsTotal = promauto.NewCounterVec(
		prometheus.CounterOpts{
			Name: "app_requests_total",
			Help: "Total number of HTTP requests",
		},
		[]string{"method", "path", "status"},
	)

	MetricHttpRequestDuration = promauto.NewHistogramVec(
		prometheus.HistogramOpts{
			Name:    "app_request_duration_seconds",
			Help:    "Duration of HTTP requests",
			Buckets: []float64{.005, .01, .025, .05, .1, .25, .5, 1, 2.5, 5, 10},
		},
		[]string{"method", "path"},
	)

	MetricActiveRequests = promauto.NewGauge(
		prometheus.GaugeOpts{
			Name: "app_requests_active",
			Help: "Number of active HTTP requests",
		},
	)
)
