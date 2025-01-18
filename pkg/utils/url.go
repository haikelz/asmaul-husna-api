package utils

import "net/url"

// An utility function decode URL (ex: test%20123 => test 123)
func RemoveURLEncoding(encodedURL string) (string, error) {
	decodedURL, err := url.QueryUnescape(encodedURL)
	if err != nil {
		return "", err
	}

	return decodedURL, nil
}
