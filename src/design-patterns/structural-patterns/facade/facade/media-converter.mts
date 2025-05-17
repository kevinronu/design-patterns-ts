import { CodecFactory, CodecType } from "../core/codecs/index.mjs";
import { MediaFile, BitrateProcessor, AudioEnhancer } from "../core/index.mjs";

export default class MediaConverterFacade {
  convertMedia(filename: string, format: CodecType): string {
    console.log("🚀 MediaConverterFacade: conversion started");

    const file = new MediaFile(filename);
    const sourceCodec = CodecFactory.extract(file);
    const destinationCodec = CodecFactory.createTargetCodec(format);

    const buffer = BitrateProcessor.read(file, sourceCodec);
    const converted = BitrateProcessor.convert(buffer, destinationCodec);

    const enhancedFile = new AudioEnhancer().fix(converted);

    console.log("✅ MediaConverterFacade: conversion completed");

    return enhancedFile;
  }
}
