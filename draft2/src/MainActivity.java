/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.cfx70.shmw;

import android.os.Bundle;

import org.apache.cordova.*;

import android.webkit.WebSettings; 
import android.webkit.WebSettings.ZoomDensity;
import android.webkit.WebView;

import android.widget.Toast;
import android.content.Context;
import android.webkit.JavascriptInterface;

public class MainActivity extends CordovaActivity
{
 	 class JSItf {
		Context mContext;

		/** Instantiate the interface and set the context. */
		JSItf(Context c) {
			mContext = c;
		}
		
		@JavascriptInterface
		public void savepng(String dturl){			
			Toast.makeText(mContext, "saving png", Toast.LENGTH_SHORT).show();
		}
		@JavascriptInterface
		public void savedxf(String dxf){
			Toast.makeText(mContext, "saving dxf", Toast.LENGTH_SHORT).show();			
		}
	 }
	 
   @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }
		
       if (appView == null) {
            init();
        }
		WebView webview= (WebView) appView.getEngine().getView();
        webview.getSettings().setBuiltInZoomControls(true);
		webview.getSettings().setDisplayZoomControls(false);

		webview.getSettings().setJavaScriptEnabled(true);		
		webview.addJavascriptInterface(new JSItf(this), "Android");
 		
		loadUrl(launchUrl);
    }
    
	private static final int CREATE_FILE = 1;

	private void createFile(/*Uri pickerInitialUri*/) {
		Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
		intent.addCategory(Intent.CATEGORY_OPENABLE);
		intent.setType("text/plain");
		intent.putExtra(Intent.EXTRA_TITLE, "sampletext.txt");

		// Optionally, specify a URI for the directory that should be opened in
		// the system file picker when your app creates the document.
		//intent.putExtra(DocumentsContract.EXTRA_INITIAL_URI, pickerInitialUri);

		startActivityForResult(intent, CREATE_FILE);
	}
	
	@Override
	public void onActivityResult(int requestCode, int resultCode,
			Intent resultData) {
		if (requestCode == CREATE_FILE
				&& resultCode == Activity.RESULT_OK) {
			// The result data contains a URI for the document or directory that
			// the user selected.
			Uri uri = null;
			if (resultData != null) {
				uri = resultData.getData();
				// Perform operations on the document using its URI.
			}
		}
	}
}
