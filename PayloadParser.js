function parseUplink(device, payload)
{
    var base64Image = payload.asString();
    var endpoint = device.endpoints.byAddress("Surv002");
    endpoint.uploadCameraSnapshot(base64Image, "png");

}
