function processProgrammingStudents() {
    "use strict";


    // Declare Constants
    const TARGET_COURSE = 18500;
    const PART_TIME = "PT";
    const FULL_TIME = "FT";

    // Declare variables
    let totalFullTime;
    let totalPartTime;
    let totalStudents;
    let currentStudentNumber;
    let currentName;
    let currentAddress;
    let currentZipCode;
    let currentStatus;
    let currentCourseNumber;

    //let testCounter;  // for testing

    // Assign initial values for variables
    totalFullTime = 0;
    totalPartTime = 0;
    totalStudents = 0;
    //testCounter = 0; // for testing
    

    // Open the Student Enrollments Record Set
    // and make the first row available
    let records = openStudentEnrollmentRecords();

    // Output the report title
    document.write("<h3>Students in Course 18500</h3>");
    
    // Start HTML table
    document.write("<table>");

    while (records.readNextRecord()) {

        // uncomment below to test a sub-set of records
        /* 
        if (testCounter === 5) {
            break;
        }
        testCounter++;
        */

        // get the course number of the current record
        // for checking if it is a targeted record
        currentCourseNumber = records.getStudentCourseNumber();
        
        if (currentCourseNumber === TARGET_COURSE) {

            // increment the total student count
            totalStudents++;

            // get all the data for this student and store
            // it in variables
            currentStudentNumber = records.getStudentNumber();
            currentName = records.getStudentName();
            currentAddress = records.getStudentAddress();
            currentZipCode = records.getStudentZipCode();
            currentStatus = records.getStudentStatus();

            // output this student
            document.write("<tr><td>"
                    + currentStudentNumber
                    + "</td><td>"
                    + currentName
                    + "</td><td>"
                    + currentAddress
                    + "</td><td>"
                    + currentZipCode
                    + "</td><td>"
                    + currentStatus
                    + "</td></tr>");


            // Now check for "FT" or "PT" in the status
            // and add to totals
            if (currentStatus === FULL_TIME) {
                totalFullTime++;
            } else if (currentStatus === PART_TIME) {
                totalPartTime++;
            }
        }
    }

    // The while loop is done, now print out the totals
    document.write("<tr>"
            + "<td colspan='5'>"
            + "<strong>Total Students:</strong>"
            + totalStudents
            + "</td></tr><tr><td colspan='5'>"
            + "<strong>Full Time: </strong>"
            + totalFullTime
            + "</td></tr><tr><td colspan='5'>"
            + "<strong>Part Time: </strong>"
            + totalPartTime
            + "</td></tr>");

    
    //End table
    document.write("</table>");
}
