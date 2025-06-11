package br.com.purplegemlab.service;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
	private final OpenAiImageModel imageModel;

	public ImageService(OpenAiImageModel imageModel) {
		this.imageModel = imageModel;
	}

	/***
	 *
	 * @param prompt - comandos
	 * @param quality - qualidade de imagem
	 * @param n - quantidade de imagens
	 * @param height - altura
	 * @param width - largura
	 * @return
	 */
	public ImageResponse generateImage(String prompt, String quality, Integer n, Integer height, Integer width) {
		ImageResponse imageResponse = imageModel.call(
			new ImagePrompt(prompt,
				OpenAiImageOptions.builder()
					.quality(quality)
					.N(n)
					.height(height)
					.width(width).build())
		);
		return imageResponse;
	}

	public ImageResponse generateImageOLD(String prompt) {
		// ImageResponse imageResponse = imageModel.call(new ImagePrompt(prompt));

		ImageResponse imageResponse = imageModel.call(
			new ImagePrompt(prompt,
				OpenAiImageOptions.builder()
					.quality("hd")
					.N(4)
					.height(1024)
					.width(1024).build())
		);

		return imageResponse;
	}
}
