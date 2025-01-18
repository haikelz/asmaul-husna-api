package controllers

import (
	"asmaul-husna-golang/pkg/services"
	"asmaul-husna-golang/pkg/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gosimple/slug"
)

type AsmaulHusnaController struct {
	AsmaulHusnaService *services.AsmaulHusnaService
}

func NewAsmaulHusnaController(asmaulHusnaService *services.AsmaulHusnaService) *AsmaulHusnaController {
	return &AsmaulHusnaController{
		AsmaulHusnaService: asmaulHusnaService,
	}
}

// AllAsmaulHusnaHandler godoc
// @Summary Get all Asma'ul Husna with optional query page and limit
// @Description Get all Asma'ul Husna with optional query page and limit
// @Tags	AsmaulHusna
// @Accept  json
// @Produce	json
// @Param 	param	query	requests.AllAsmaulHusnaRequest	false	"query"
// @Success 200	{object} 	models.APIResponse 		"Get Asma'ul Husna success!"
// @Failure 500 {object} models.APIErrorResponse "Internal Server Error"
// @Router 	/api/all  	[get]
func (ac *AsmaulHusnaController) AllAsmaulHusnaHandler(c *fiber.Ctx) error {
	query := c.Queries()

	queryLimit := utils.ConvertStringToNumber(query["limit"])
	queryPage := utils.ConvertStringToNumber(query["page"])

	allAsmaulHusna, err := ac.AsmaulHusnaService.GetAllAsmaulHusna(queryPage, queryLimit)
	if err != nil {
		return utils.ErrorResponse(c, fiber.StatusInternalServerError, err.Error())
	}

	allAsmaulHusnaLength := len(allAsmaulHusna.Data)

	return utils.SuccessResponse(c, fiber.StatusOK, allAsmaulHusnaLength, allAsmaulHusna.Data)
}

// AsmaulHusnaBasedOnUrutanHandler godoc
// @Summary Get Asma'ul Husna based on urutan
// @Description Get Asma'ul Husna based on urutan
// @Tags	AsmaulHusna
// @Accept  json
// @Produce	json
// @Param urutan path string true "Urutan"
// @Success 200	{object} 	models.APIResponse 		"Get Asma'ul Husna based on urutan success!"
// @Failure 400 {object} models.APIResponse "Bad Request"
// @Failure 500 {object} models.APIErrorResponse "Internal Server Error"
// @Router 	/api/{urutan}  	[get]
func (ac *AsmaulHusnaController) AsmaulHusnaBasedOnUrutanHandler(c *fiber.Ctx) error {
	urutan, err := c.ParamsInt("urutan")
	if err != nil {
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
// @Success 200 {object} models.APIResponse "Get Asma'ul Husna based on latin success!"
// @Failure 400 {object} models.APIErrorResponse "Bad Request"
// @Failure 500 {object} models.APIErrorResponse "Internal Server Error"
// @Router /api/latin/{latin} [get]
func (ac *AsmaulHusnaController) AsmaulHusnaBasedOnLatinHandler(c *fiber.Ctx) error {
	// Decode a fresh URL into the clean one
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
