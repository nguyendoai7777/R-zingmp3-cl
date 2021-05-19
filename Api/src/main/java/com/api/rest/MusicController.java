package com.api.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(value = "/music")
public class MusicController {

  public static final String AUTIDO_PATH = "";

  @GetMapping("/audios/{fileName}")
  public Mono

}
