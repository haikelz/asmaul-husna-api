package utils

import "testing"

func TestConvertStringToNumber(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected int
	}{
		{
			name:     "Convert valid positive number string",
			input:    "123",
			expected: 123,
		},
		{
			name:     "Convert valid negative number string",
			input:    "-456",
			expected: -456,
		},
		{
			name:     "Convert zero string",
			input:    "0",
			expected: 0,
		},
		{
			name:     "Convert invalid string should return 0",
			input:    "abc",
			expected: 0,
		},
		{
			name:     "Convert empty string should return 0",
			input:    "",
			expected: 0,
		},
		{
			name:     "Convert string with letters should return 0",
			input:    "123abc",
			expected: 0,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := ConvertStringToNumber(tt.input)
			if result != tt.expected {
				t.Errorf("ConvertStringToNumber(%v) = %v, want %v", tt.input, result, tt.expected)
			}
		})
	}
}
