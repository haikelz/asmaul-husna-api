package controllers

import (
	"asmaul-husna/pkg/services"
	"encoding/json"
	"net/http/httptest"
	"testing"

	"github.com/gofiber/fiber/v2"
)

func TestNewAsmaulHusnaController(t *testing.T) {
	service := services.NewAsmaulHusnaService()
	controller := NewAsmaulHusnaController(service)

	if controller == nil {
		t.Fatal("NewAsmaulHusnaController() returned nil")
	}
	if controller.AsmaulHusnaService != service {
		t.Error("NewAsmaulHusnaController() service not set correctly")
	}
}

func TestHomeInfoHandler(t *testing.T) {
	service := services.NewAsmaulHusnaService()
	controller := NewAsmaulHusnaController(service)

	app := fiber.New()
	app.Get("/", controller.HomeInfoHandler)

	req := httptest.NewRequest("GET", "/", nil)
	resp, err := app.Test(req)

	if err != nil {
		t.Errorf("HomeInfoHandler() error = %v", err)
		return
	}
	if resp.StatusCode != fiber.StatusOK {
		t.Errorf("HomeInfoHandler() status code = %v, want %v", resp.StatusCode, fiber.StatusOK)
		return
	}

	var body map[string]interface{}
	err = json.NewDecoder(resp.Body).Decode(&body)
	if err != nil {
		t.Errorf("HomeInfoHandler() decode error = %v", err)
		return
	}
	if body["author"] != "Haikel Ilham Hakim" {
		t.Errorf("HomeInfoHandler() author = %v, want 'Haikel Ilham Hakim'", body["author"])
	}
	if body["repository"] != "https://github.com/haikelz/asmaul-husna-api" {
		t.Errorf("HomeInfoHandler() repository = %v, want 'https://github.com/haikelz/asmaul-husna-api'", body["repository"])
	}
}

func TestAllAsmaulHusnaHandler(t *testing.T) {
	service := services.NewAsmaulHusnaService()
	controller := NewAsmaulHusnaController(service)

	app := fiber.New()
	app.Get("/api/all", controller.AllAsmaulHusnaHandler)

	tests := []struct {
		name           string
		url            string
		expectedStatus int
		description    string
	}{
		{
			name:           "Get all without query params",
			url:            "/api/all",
			expectedStatus: fiber.StatusOK,
			description:    "Should return all data without pagination",
		},
		{
			name:           "Get all with page=1 and limit=0",
			url:            "/api/all?page=1&limit=0",
			expectedStatus: fiber.StatusOK,
			description:    "Should return all data",
		},
		{
			name:           "Get all with page=1 and limit=10",
			url:            "/api/all?page=1&limit=10",
			expectedStatus: fiber.StatusOK,
			description:    "Should return first 10 items",
		},
		{
			name:           "Get all with page=2 and limit=10",
			url:            "/api/all?page=2&limit=10",
			expectedStatus: fiber.StatusOK,
			description:    "Should return items 11-20",
		},
		{
			name:           "Get all with invalid page",
			url:            "/api/all?page=abc&limit=10",
			expectedStatus: fiber.StatusOK,
			description:    "Should handle invalid page parameter",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			req := httptest.NewRequest("GET", tt.url, nil)
			resp, err := app.Test(req)

			if err != nil {
				t.Errorf("AllAsmaulHusnaHandler() error = %v", err)
				return
			}
			if resp.StatusCode != tt.expectedStatus {
				t.Errorf("AllAsmaulHusnaHandler() status code = %v, want %v", resp.StatusCode, tt.expectedStatus)
				return
			}

			if resp.StatusCode == fiber.StatusOK {
				var body map[string]interface{}
				err = json.NewDecoder(resp.Body).Decode(&body)
				if err != nil {
					t.Errorf("AllAsmaulHusnaHandler() decode error = %v", err)
					return
				}
				if _, ok := body["statusCode"]; !ok {
					t.Error("AllAsmaulHusnaHandler() response missing 'statusCode'")
				}
				if _, ok := body["total"]; !ok {
					t.Error("AllAsmaulHusnaHandler() response missing 'total'")
				}
				if _, ok := body["data"]; !ok {
					t.Error("AllAsmaulHusnaHandler() response missing 'data'")
				}
			}
		})
	}
}

func TestAsmaulHusnaBasedOnUrutanHandler(t *testing.T) {
	service := services.NewAsmaulHusnaService()
	controller := NewAsmaulHusnaController(service)

	app := fiber.New()
	app.Get("/api/:urutan", controller.AsmaulHusnaBasedOnUrutanHandler)

	tests := []struct {
		name           string
		url            string
		expectedStatus int
		description    string
	}{
		{
			name:           "Get asmaul husna with valid urutan=1",
			url:            "/api/1",
			expectedStatus: fiber.StatusOK,
			description:    "Should return first asmaul husna",
		},
		{
			name:           "Get asmaul husna with valid urutan=50",
			url:            "/api/50",
			expectedStatus: fiber.StatusOK,
			description:    "Should return 50th asmaul husna",
		},
		{
			name:           "Get asmaul husna with invalid urutan=0",
			url:            "/api/0",
			expectedStatus: fiber.StatusBadRequest,
			description:    "Should return bad request for urutan < 1",
		},
		{
			name:           "Get asmaul husna with invalid urutan=100",
			url:            "/api/100",
			expectedStatus: fiber.StatusBadRequest,
			description:    "Should return bad request for urutan > 99",
		},
		{
			name:           "Get asmaul husna with invalid urutan=abc",
			url:            "/api/abc",
			expectedStatus: fiber.StatusBadRequest,
			description:    "Should return bad request for non-numeric urutan",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			req := httptest.NewRequest("GET", tt.url, nil)
			resp, err := app.Test(req)

			if err != nil {
				t.Errorf("AsmaulHusnaBasedOnUrutanHandler() error = %v", err)
				return
			}
			if resp.StatusCode != tt.expectedStatus {
				t.Errorf("AsmaulHusnaBasedOnUrutanHandler() status code = %v, want %v", resp.StatusCode, tt.expectedStatus)
				return
			}

			if resp.StatusCode == fiber.StatusOK {
				var body map[string]interface{}
				err = json.NewDecoder(resp.Body).Decode(&body)
				if err != nil {
					t.Errorf("AsmaulHusnaBasedOnUrutanHandler() decode error = %v", err)
					return
				}
				if _, ok := body["statusCode"]; !ok {
					t.Error("AsmaulHusnaBasedOnUrutanHandler() response missing 'statusCode'")
				}
				if _, ok := body["total"]; !ok {
					t.Error("AsmaulHusnaBasedOnUrutanHandler() response missing 'total'")
				}
				if _, ok := body["data"]; !ok {
					t.Error("AsmaulHusnaBasedOnUrutanHandler() response missing 'data'")
				}
			}
		})
	}
}

func TestAsmaulHusnaBasedOnLatinHandler(t *testing.T) {
	service := services.NewAsmaulHusnaService()
	controller := NewAsmaulHusnaController(service)

	app := fiber.New()
	app.Get("/api/latin/:latin", controller.AsmaulHusnaBasedOnLatinHandler)

	tests := []struct {
		name           string
		url            string
		expectedStatus int
		description    string
	}{
		{
			name:           "Get asmaul husna with valid latin=ar-rahman",
			url:            "/api/latin/ar-rahman",
			expectedStatus: fiber.StatusOK,
			description:    "Should return Ar Rahman asmaul husna",
		},
		{
			name:           "Get asmaul husna with valid latin=al-malik",
			url:            "/api/latin/al-malik",
			expectedStatus: fiber.StatusOK,
			description:    "Should return Al Malik asmaul husna",
		},
		{
			name:           "Get asmaul husna with URL encoded latin",
			url:            "/api/latin/ar%20rahman",
			expectedStatus: fiber.StatusOK,
			description:    "Should handle URL encoded latin parameter",
		},
		{
			name:           "Get asmaul husna with invalid latin",
			url:            "/api/latin/invalid-name",
			expectedStatus: fiber.StatusOK,
			description:    "Should return success but with nil data",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			req := httptest.NewRequest("GET", tt.url, nil)
			resp, err := app.Test(req)

			if err != nil {
				t.Errorf("AsmaulHusnaBasedOnLatinHandler() error = %v", err)
				return
			}
			if resp.StatusCode != tt.expectedStatus {
				t.Errorf("AsmaulHusnaBasedOnLatinHandler() status code = %v, want %v", resp.StatusCode, tt.expectedStatus)
				return
			}

			if resp.StatusCode == fiber.StatusOK {
				var body map[string]interface{}
				err = json.NewDecoder(resp.Body).Decode(&body)
				if err != nil {
					t.Errorf("AsmaulHusnaBasedOnLatinHandler() decode error = %v", err)
					return
				}
				if _, ok := body["statusCode"]; !ok {
					t.Error("AsmaulHusnaBasedOnLatinHandler() response missing 'statusCode'")
				}
			}
		})
	}
}
