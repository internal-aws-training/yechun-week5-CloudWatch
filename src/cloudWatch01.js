const AWS = require('aws-sdk');
const cloudWatch = new AWS.CloudWatch();

exports.handler = async () => {
  var params = {
    Namespace: "SYC_namespace",
    MetricData: [
      {
        MetricName: "SYC_metricName",
        Dimensions: [
          {
            Name: "test_1",
            Value: "1"
          },
          {
            Name: "test_2",
            Value: "2"
          }
        ],
        Counts: [],
        Timestamp: new Date(),
        Unit: "Seconds",
        Value: 1
      }
    ]
  }
  const res = await cloudWatch.putMetricData(params).promise();
  console.log("Here are logs: ", res);
  const currentMinutes = new Date().getMinutes()
  if (currentMinutes % 2 === 0) {
    console.log("Now is an even minute.")
  }
}
