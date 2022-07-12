package org.run;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepDefinition.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = "org.stepDefinition", monochrome = true, dryRun = false, tags = "@Amazon" ,plugin = {
		"html:C:\\Users\\PC 721\\eclipse-workspace\\Cucumber\\AllReports\\htmlReport",
		"junit:C:\\Users\\PC 721\\eclipse-workspace\\Cucumber\\AllReports\\junitReport\\amazonbook.xml",
		"json:C:\\Users\\PC 721\\eclipse-workspace\\Cucumber\\AllReports\\jsonReport\\Amazon.json"})

public class AmazonRunner {
	@AfterClass
	public static void report() {
		JvmReport.generateJvmReport("C:\\Users\\PC 721\\eclipse-workspace\\Cucumber\\AllReports\\jsonReport\\Amazon.json");
		
	}
	

}
