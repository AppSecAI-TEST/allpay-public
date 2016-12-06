package kz.allpay.mfs.signature.keyproviders;

import java.io.IOException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;

/**
 * @author magzhan.karasayev
 * @since 5/19/16 12:42 AM
 */
public interface KeyProvider {
    public PublicKey getPublicKey(String merchantId) throws IOException, InvalidKeySpecException;
    public PrivateKey getPrivateKey(String merchantId_ignored) throws IOException, InvalidKeySpecException;
}