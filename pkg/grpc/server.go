package grpc

import (
	"asmaul-husna/pkg/entities"
	"asmaul-husna/pkg/proto"
	"asmaul-husna/pkg/utils"
	"context"
	"math"

	"github.com/gosimple/slug"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Server struct {
	proto.UnimplementedAsmaulHusnaServiceServer
}

func NewServer() *Server {
	return &Server{}
}

func (s *Server) GetHomeInfo(ctx context.Context, req *proto.HomeInfoRequest) (*proto.HomeInfoResponse, error) {
	return &proto.HomeInfoResponse{
		Author:     "Haikel Ilham Hakim",
		Repository: "https://github.com/haikelz/asmaul-husna-api",
		Endpoints: &proto.Endpoints{
			All:    "/api/all",
			Urutan: "/api/:urutan",
			Latin:  "/api/latin/:latin",
		},
	}, nil
}

func (s *Server) GetAllAsmaulHusna(ctx context.Context, req *proto.GetAllRequest) (*proto.GetAllResponse, error) {
	page := int(req.Page)
	limit := int(req.Limit)

	allData := utils.AsmaulHusnaData
	totalData := len(allData)

	// Apply pagination logic (reused from existing service)
	var result []entities.AsmaulHusna

	if page == 1 && limit == 0 {
		result = allData
	} else if page <= 0 {
		if limit <= totalData && limit > 0 {
			result = allData[0:limit]
		} else {
			result = allData
		}
	} else if page > 0 || limit > 0 {
		startValue := limit * (page - 1)
		endValue := limit * page

		if (page * limit) > totalData {
			round := int(math.Round(float64(totalData) / float64(page)))
			result = allData[round:totalData]
		} else {
			result = allData[startValue:endValue]
		}
	} else {
		result = allData
	}

	// Convert to proto message
	protoData := make([]*proto.AsmaulHusna, len(result))
	for i, item := range result {
		protoData[i] = &proto.AsmaulHusna{
			Urutan: item.Urutan,
			Latin:  item.Latin,
			Arab:   item.Arab,
			Arti:   item.Arti,
		}
	}

	return &proto.GetAllResponse{
		StatusCode: 200,
		Total:      int32(len(result)),
		Data:       protoData,
	}, nil
}

func (s *Server) GetAsmaulHusnaByUrutan(ctx context.Context, req *proto.GetByUrutanRequest) (*proto.GetOneResponse, error) {
	urutan := int(req.Urutan)

	// Validate urutan
	if urutan < 1 || urutan > 99 {
		return nil, status.Error(codes.InvalidArgument, "Invalid urutan parameter. Must be between 1 and 99")
	}

	allData := utils.AsmaulHusnaData

	for _, item := range allData {
		if int(item.Urutan) == urutan {
			return &proto.GetOneResponse{
				StatusCode: 200,
				Total:      1,
				Data: &proto.AsmaulHusna{
					Urutan: item.Urutan,
					Latin:  item.Latin,
					Arab:   item.Arab,
					Arti:   item.Arti,
				},
			}, nil
		}
	}

	return nil, status.Error(codes.NotFound, "Asma'ul Husna not found")
}

func (s *Server) GetAsmaulHusnaByLatin(ctx context.Context, req *proto.GetByLatinRequest) (*proto.GetOneResponse, error) {
	latin := slug.Make(req.Latin)

	if latin == "" {
		return nil, status.Error(codes.InvalidArgument, "Latin parameter is required")
	}

	allData := utils.AsmaulHusnaData

	for _, item := range allData {
		if slug.Make(item.Latin) == latin {
			return &proto.GetOneResponse{
				StatusCode: 200,
				Total:      1,
				Data: &proto.AsmaulHusna{
					Urutan: item.Urutan,
					Latin:  item.Latin,
					Arab:   item.Arab,
					Arti:   item.Arti,
				},
			}, nil
		}
	}

	return nil, status.Error(codes.NotFound, "Asma'ul Husna not found")
}
