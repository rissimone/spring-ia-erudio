package br.com.purplegemlab.controller;

import br.com.purplegemlab.service.ImageService;
import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ImageController {
	private final ImageService imageService;

	public ImageController(ImageService imageService) {
		this.imageService = imageService;
	}

	@GetMapping("generate-image")
	public List<String> generateImage(
			@RequestParam String prompt,
			@RequestParam(defaultValue = "hd") String quality,
			@RequestParam(defaultValue = "1") Integer n,
			@RequestParam(defaultValue = "1024") Integer height,
			@RequestParam(defaultValue = "1024") Integer width) {
		ImageResponse response =  imageService.generateImage(prompt, quality, n, height, width);
		List<String> imageUlrs = response.getResults().stream()
			.map(result -> result.getOutput().getUrl())
			.toList();
		return imageUlrs;
	}
}
