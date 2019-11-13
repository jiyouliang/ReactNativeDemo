package com.reactnativedemo;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

import java.util.ArrayList;
import java.util.Arrays;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeDemo";
    }


    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()){
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {


                Bundle bundle = new Bundle();
                bundle.putString("message", "Message from android");
                bundle.putString("img", "http://47.106.182.74/demo/images/phone1.webp");
                return bundle;
            }



        };
    }
}
