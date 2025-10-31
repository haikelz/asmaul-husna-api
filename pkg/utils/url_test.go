package utils

import "testing"

func TestRemoveURLEncoding(t *testing.T) {
	tests := []struct {
		name            string
		input           string
		expected        string
		shouldHaveError bool
	}{
		{
			name:            "Decode simple URL encoded string",
			input:           "test%20123",
			expected:        "test 123",
			shouldHaveError: false,
		},
		{
			name:            "Decode URL with plus sign",
			input:           "hello%2Bworld",
			expected:        "hello+world",
			shouldHaveError: false,
		},
		{
			name:            "Decode URL with special characters",
			input:           "%C3%A9",
			expected:        "é",
			shouldHaveError: false,
		},
		{
			name:            "Decode already decoded string",
			input:           "test 123",
			expected:        "test 123",
			shouldHaveError: false,
		},
		{
			name:            "Decode empty string",
			input:           "",
			expected:        "",
			shouldHaveError: false,
		},
		{
			name:            "Decode string with multiple encodings",
			input:           "hello%20world%21",
			expected:        "hello world!",
			shouldHaveError: false,
		},
		{
			name:            "Decode string with invalid percent encoding",
			input:           "test%",
			expected:        "",
			shouldHaveError: true,
		},
		{
			name:            "Decode string with incomplete percent encoding",
			input:           "test%2",
			expected:        "",
			shouldHaveError: true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := RemoveURLEncoding(tt.input)

			if (err != nil) != tt.shouldHaveError {
				t.Errorf("RemoveURLEncoding(%v) error = %v, want error = %v", tt.input, err, tt.shouldHaveError)
				return
			}

			if !tt.shouldHaveError && result != tt.expected {
				t.Errorf("RemoveURLEncoding(%v) = %v, want %v", tt.input, result, tt.expected)
			}
		})
	}
}
