package app

import (
	"asmaul-husna-golang/pkg/server"
	"net/http"

	"github.com/gofiber/fiber/v2/middleware/adaptor"
)

// @title Asmaul Husna API
// @version 1.0
// @termsOfService http://swagger.io/terms/
// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html
func Handler(w http.ResponseWriter, r *http.Request) {
	r.RequestURI = r.URL.String()

	server := server.New()
	server.RegisterFiberRoutes()

	adaptor.FiberApp(server.App).ServeHTTP(w, r)
}
