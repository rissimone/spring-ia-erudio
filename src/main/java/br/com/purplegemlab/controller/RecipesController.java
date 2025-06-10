package br.com.purplegemlab.controller;

import br.com.purplegemlab.service.RecipesService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipesController {
    private final RecipesService recipesService;

    public RecipesController(RecipesService recipesService) {
        this.recipesService = recipesService;
    }

    @GetMapping("create-recipe")
    public String createRecipe(
            @RequestParam String ingredients,
            @RequestParam(defaultValue = "any") String cuisine,
            @RequestParam(defaultValue = "none") String dietaryRestrictions) {
        return recipesService.createRecipe(ingredients, cuisine, dietaryRestrictions);
    }
}
