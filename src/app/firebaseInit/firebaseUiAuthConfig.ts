import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
        {
            scopes: [
                'email',
            ],
            customParameters: {
                'auth_type': 'reauthenticate'
            },
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        }
    ],
    //term of service
    tosUrl: '<your-tos-link>',
    //privacy url
    privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    //credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
};