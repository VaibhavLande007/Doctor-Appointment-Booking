package com.vaibhav.DocNet._0.controller;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Profile("prod")
public class SPAController {

    /**
     * Forward all non-API routes to index.html for React Router
     * This allows React Router to handle client-side routing
     */
    @GetMapping(value = {
            "/",
            "/home/**",
            "/admin/**",
            "/client/**",
            "/pharmacyadmin/**",
            "/{path:[^\\.]*}"
    })
    public String forward() {
        return "forward:/index.html";
    }
}