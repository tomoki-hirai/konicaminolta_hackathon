aws_ip = "ec2-13-231-238-116.ap-northeast-1.compute.amazonaws.com"

var constants = {
    host_url :aws_ip,
    mongo_db_url : 'mongodb://' + aws_ip + '/' + 'meetingDB',
    io : { }
};
module.exports = constants;
