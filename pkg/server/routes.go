package server

import (
	"asmaul-husna/pkg/server/routes"
)

func (s *FiberApp) RegisterFiberRoutes() {
	routes.AsmaulHusnaRoute(s)
}
