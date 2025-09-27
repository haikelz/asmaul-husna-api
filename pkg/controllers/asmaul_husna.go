package controllers

import (
	entities "asmaul-husna/pkg/entities"
	"asmaul-husna/pkg/services"
	"asmaul-husna/pkg/utils"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gosimple/slug"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type AsmaulHusnaController struct {
	AsmaulHusnaService *services.AsmaulHusnaService
}

func NewAsmaulHusnaController(asmaulHusnaService *services.AsmaulHusnaService) *AsmaulHusnaController {
	return &AsmaulHusnaController{
		AsmaulHusnaService: asmaulHusnaService,
	}
}

// HomeInfoHandler godoc
// @Summary Get Info about the API
// @Description Get Info about the API.
// @Tags	AsmaulHusna
// @Accept  json
// @Produce	json
// @Success 200	{object} 	models.APIInfoResponse 		"Get Info success!"
// @Failure 500 {object} models.APIErrorResponse "Internal Server Error"
// @Router 	/  	[get]
func (ac *AsmaulHusnaController) HomeInfoHandler(c *fiber.Ctx) error {
	var info entities.HomeInfo = entities.HomeInfo{
		Author:     "Haikel Ilham Hakim",
		Repository: "https://github.com/haikelz/asmaul-husna-api",
		Endpoints: &entities.EndpointsInfo{
			All:    "/api/all",
			Urutan: "/api/:urutan",
			Latin:  "/api/latin/:latin",
		},
	}

	return utils.HomeInfoResponse(c, fiber.StatusOK, &info)
}

// AllAsmaulHusnaHandler godoc
// @Summary Get all Asma'ul Husna with optional query page and limit
// @Description Get all Asma'ul Husna with optional query page and limit
// @Tags	AsmaulHusna
// @Accept  json
// @Produce	json
// @Param 	param	query	requests.AllAsmaulHusnaRequest	false	"query"
// @Success 200	{object} 	models.APISuccessResponse 		"Get Asma'ul Husna success!"
// @Failure 500 {object} models.APIErrorResponse "Internal Server Error"
// @Router 	/api/all  	[get]
func (ac *AsmaulHusnaController) AllAsmaulHusnaHandler(c *fiber.Ctx) error {
	query := c.Queries()

	queryLimit := utils.ConvertStringToNumber(query["limit"])
	queryPage := utils.ConvertStringToNumber(query["page"])

	allAsmaulHusna, err := ac.AsmaulHusnaService.GetAllAsmaulHusnaWithPagination(queryPage, queryLimit)
	if err != nil {
		return utils.ErrorResponse(c, fiber.StatusInternalServerError, err.Error())
	}

	allAsmaulHusnaLength := len(allAsmaulHusna)

	return utils.SuccessResponseAllAsmaulHusna(c, fiber.StatusOK, allAsmaulHusnaLength, allAsmaulHusna)
}

// AsmaulHusnaBasedOnUrutanHandler godoc
// @Summary Get Asma'ul Husna based on urutan
// @Description Get Asma'ul Husna based on urutan
// @Tags	AsmaulHusna
// @Accept  json
// @Produce	json
// @Param urutan path string true "Urutan"
// @Success 200	{object} 	models.APISuccessResponse 		"Get Asma'ul Husna based on urutan success!"
// @Failure 400 {object} models.APISuccessResponse "Bad Request"
// @Failure 500 {object} models.APIErrorResponse "Internal Server Error"
// @Router 	/api/{urutan}  	[get]
func (ac *AsmaulHusnaController) AsmaulHusnaBasedOnUrutanHandler(c *fiber.Ctx) error {
	urutan, err := c.ParamsInt("urutan")
	if err != nil || urutan < 1 || urutan > 99 {
		return utils.ErrorResponse(c, fiber.StatusBadRequest, err.Error())
	}

	asmaulHusna, err := ac.AsmaulHusnaService.GetAsmaulHusnaBasedOnUrutan(urutan)
	if err != nil {
		return utils.ErrorResponse(c, fiber.StatusInternalServerError, err.Error())
	}

	return utils.SuccessResponse(c, fiber.StatusOK, 1, asmaulHusna)
}

// AsmaulHusnaBasedOnLatinHandler godocs
// @Summary Get Asma'ul Husna based on latin
// @Description Get Asma'ul Husna based on latin.
// @Tags AsmaulHusna
// @Accept json
// @Produce json
// @Param latin path string true "Latin"
// @Success 200 {object} models.APISuccessResponse "Get Asma'ul Husna based on latin success!"
// @Failure 400 {object} models.APIErrorResponse "Bad Request"
// @Failure 500 {object} models.APIErrorResponse "Internal Server Error"
// @Router /api/latin/{latin} [get]
func (ac *AsmaulHusnaController) AsmaulHusnaBasedOnLatinHandler(c *fiber.Ctx) error {
	decoded, err := utils.RemoveURLEncoding(c.Params("latin"))
	if err != nil {
		return utils.ErrorResponse(c, fiber.StatusBadRequest, err.Error())
	}

	latin := slug.Make(decoded)

	asmaulHusna, err := ac.AsmaulHusnaService.GetAsmaulHusnaBasedOnLatin(latin)
	if err != nil {
		return utils.ErrorResponse(c, fiber.StatusInternalServerError, err.Error())
	}

	return utils.SuccessResponse(c, fiber.StatusOK, 1, asmaulHusna)
}

type MetricsEndpointBody struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// MetricsHandler godoc
// @Summary Get Metrics
// @Description Get Metrics
// @Tags Metrics
// @Accept json
// @Produce json
// @Error 400 {object} models.APIErrorResponse "Bad Request"
// @Failure 500 {object} models.APIErrorResponse "Internal Server Error"
// @Router /metrics [get]
// @Security BearerAuth
// @in header
// @name Authorization
func MetricsHandler() http.Handler {
	return promhttp.Handler()
}
