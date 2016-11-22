package com.example.dshir.tlvweather;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
		setSupportActionBar(toolbar);

		FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
		fab.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View view) {
				Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
						.setAction("Action", null).show();
			}
		});
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.menu_main, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();

		//noinspection SimplifiableIfStatement
		if (id == R.id.action_settings) {
			return true;
		}

		return super.onOptionsItemSelected(item);
	}

	public void fetchWeather(final View view) {
		final WeatherFetcher fetcher = new WeatherFetcher(view.getContext());
		final ProgressDialog progressDialog = new ProgressDialog(this);
		progressDialog.setMessage("Fetching weather...");
		progressDialog.show();

		fetcher.dispatchRequest(new WeatherFetcher.WeatherResponseListener() {
			@Override
			public void onResponse(WeatherFetcher.WeatherResponse response) {
				progressDialog.hide();

				if (response.isError) {
					Toast.makeText(view.getContext(), "Error while fetching weather", Toast.LENGTH_LONG);
					return;
				}

				((TextView)MainActivity.this.findViewById(R.id.text_weather)).setText(response.location);
				((TextView)MainActivity.this.findViewById(R.id.text_temprature)).setText(String.valueOf(response.temp));
				((TextView)MainActivity.this.findViewById(R.id.text_description)).setText(response.description);
			}
		});
	}

}
