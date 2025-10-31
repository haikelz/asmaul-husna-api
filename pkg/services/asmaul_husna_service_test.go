package services

import (
	"asmaul-husna/pkg/utils"
	"testing"
)

func TestNewAsmaulHusnaService(t *testing.T) {
	service := NewAsmaulHusnaService()
	if service == nil {
		t.Error("NewAsmaulHusnaService() returned nil")
	}
}

func TestGetAllAsmaulHusnaWithPagination(t *testing.T) {
	service := NewAsmaulHusnaService()
	totalData := len(utils.AsmaulHusnaData)

	tests := []struct {
		name           string
		page           int
		limit          int
		expectedLength int
		description    string
	}{
		{
			name:           "Get all data with page=1 and limit=0",
			page:           1,
			limit:          0,
			expectedLength: totalData,
			description:    "Should return all data when page=1 and limit=0",
		},
		{
			name:           "Get data with page=0 and limit=0",
			page:           0,
			limit:          0,
			expectedLength: totalData,
			description:    "Should return all data when page=0 and limit=0",
		},
		{
			name:           "Get data with page=0 and limit=5",
			page:           0,
			limit:          5,
			expectedLength: 5,
			description:    "Should return first 5 items when page=0 and limit=5",
		},
		{
			name:           "Get data with page=1 and limit=10",
			page:           1,
			limit:          10,
			expectedLength: 10,
			description:    "Should return first 10 items when page=1 and limit=10",
		},
		{
			name:           "Get data with page=2 and limit=10",
			page:           2,
			limit:          10,
			expectedLength: 10,
			description:    "Should return items 11-20 when page=2 and limit=10",
		},
		{
			name:           "Get data with page=1 and limit=100",
			page:           1,
			limit:          100,
			expectedLength: 0,
			description:    "Should handle edge case when page*limit exceeds total data",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := service.GetAllAsmaulHusnaWithPagination(tt.page, tt.limit)
			if err != nil {
				t.Errorf("GetAllAsmaulHusnaWithPagination() error = %v, want nil", err)
				return
			}

			if len(result) != tt.expectedLength {
				t.Errorf("GetAllAsmaulHusnaWithPagination() length = %v, want %v", len(result), tt.expectedLength)
			}

			// Verify first item is correct when pagination is applied
			if tt.page > 1 && tt.limit > 0 && len(result) > 0 {
				expectedUrutan := (tt.page-1)*tt.limit + 1
				if int(result[0].Urutan) != expectedUrutan {
					t.Errorf("First item urutan = %v, want %v", result[0].Urutan, expectedUrutan)
				}
			}
		})
	}
}

func TestGetAsmaulHusnaBasedOnUrutan(t *testing.T) {
	service := NewAsmaulHusnaService()

	tests := []struct {
		name        string
		urutan      int
		shouldError bool
		description string
	}{
		{
			name:        "Get asmaul husna with urutan=1",
			urutan:      1,
			shouldError: false,
			description: "Should return first asmaul husna",
		},
		{
			name:        "Get asmaul husna with urutan=50",
			urutan:      50,
			shouldError: false,
			description: "Should return 50th asmaul husna",
		},
		{
			name:        "Get asmaul husna with urutan=99",
			urutan:      99,
			shouldError: false,
			description: "Should return 99th asmaul husna",
		},
		{
			name:        "Get asmaul husna with invalid urutan=0",
			urutan:      0,
			shouldError: false,
			description: "Should return nil when urutan doesn't exist",
		},
		{
			name:        "Get asmaul husna with invalid urutan=100",
			urutan:      100,
			shouldError: false,
			description: "Should return nil when urutan doesn't exist",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := service.GetAsmaulHusnaBasedOnUrutan(tt.urutan)
			if (err != nil) != tt.shouldError {
				t.Errorf("GetAsmaulHusnaBasedOnUrutan() error = %v, want error = %v", err, tt.shouldError)
				return
			}

			if tt.urutan >= 1 && tt.urutan <= 99 {
				if result == nil {
					t.Errorf("GetAsmaulHusnaBasedOnUrutan() result = nil, want non-nil")
					return
				}
				if int(result.Urutan) != tt.urutan {
					t.Errorf("GetAsmaulHusnaBasedOnUrutan() urutan = %v, want %v", result.Urutan, tt.urutan)
				}
				if result.Arab == "" {
					t.Errorf("GetAsmaulHusnaBasedOnUrutan() arab is empty")
				}
				if result.Latin == "" {
					t.Errorf("GetAsmaulHusnaBasedOnUrutan() latin is empty")
				}
				if result.Arti == "" {
					t.Errorf("GetAsmaulHusnaBasedOnUrutan() arti is empty")
				}
			} else {
				// For invalid urutan, result should be nil
				if result != nil {
					t.Errorf("GetAsmaulHusnaBasedOnUrutan() result = %v, want nil for invalid urutan", result)
				}
			}
		})
	}
}

func TestGetAsmaulHusnaBasedOnLatin(t *testing.T) {
	service := NewAsmaulHusnaService()

	tests := []struct {
		name        string
		latin       string
		shouldError bool
		description string
	}{
		{
			name:        "Get asmaul husna with latin=ar-rahman",
			latin:       "ar-rahman",
			shouldError: false,
			description: "Should return Ar Rahman asmaul husna",
		},
		{
			name:        "Get asmaul husna with latin=ar-rahiim",
			latin:       "ar-rahiim",
			shouldError: false,
			description: "Should return Ar Rahiim asmaul husna",
		},
		{
			name:        "Get asmaul husna with latin=al-malik",
			latin:       "al-malik",
			shouldError: false,
			description: "Should return Al Malik asmaul husna",
		},
		{
			name:        "Get asmaul husna with invalid latin",
			latin:       "invalid-name",
			shouldError: false,
			description: "Should return nil when latin doesn't exist",
		},
		{
			name:        "Get asmaul husna with empty latin",
			latin:       "",
			shouldError: false,
			description: "Should return nil when latin is empty",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := service.GetAsmaulHusnaBasedOnLatin(tt.latin)
			if (err != nil) != tt.shouldError {
				t.Errorf("GetAsmaulHusnaBasedOnLatin() error = %v, want error = %v", err, tt.shouldError)
				return
			}

			if tt.latin != "" && tt.latin != "invalid-name" {
				if result == nil {
					t.Errorf("GetAsmaulHusnaBasedOnLatin() result = nil, want non-nil")
					return
				}
				if result.Arab == "" {
					t.Errorf("GetAsmaulHusnaBasedOnLatin() arab is empty")
				}
				if result.Latin == "" {
					t.Errorf("GetAsmaulHusnaBasedOnLatin() latin is empty")
				}
				if result.Arti == "" {
					t.Errorf("GetAsmaulHusnaBasedOnLatin() arti is empty")
				}
			}
		})
	}
}
