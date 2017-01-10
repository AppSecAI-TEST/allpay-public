package kz.allpay.api.interfaces;

import kz.allpay.api.model.request.*;
import kz.allpay.api.model.response.DefaultResponse;

import javax.ws.rs.core.Response;

/**
 * Этот класс содержит запросы для управления своим профилем
 * @author magzhan.karasayev
 * @since 11/16/16 6:56 PM
 */
public interface UserProfileManagement {
    /**
     * Получение общей информации о пользователе
     */
    public Response getUserInfo(UserProfileRequest request);

    /**
     * Изменения метода уведомления
     */
    public Response changeAlertMethod(ChangeAlertRequest request);

    /**
     * Изменение пина
     */
    public DefaultResponse changePin(ChangePinRequest request);

    /**
     * Логаут сессии
     */
    public Response sessionLogout(SessionLogoutRequest request);

    /**
     * Отвязка устройства
     */
    public Response unbindDevice(UnbindDeviceRequest request);
}
