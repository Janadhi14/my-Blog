## Bucket policy
This is a policy that enables users that have been autheticatied to be able to access the bucket.

- so suppose that we are wanting to allow users to get to the bucket and save the transcribed audio file as a text file. we need to allow a users within a domain to be able to use this 
```{
  "Version": "2012-10-17",
  "Id": "PublicReadGetObjectPolicy",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": [
          "arn:aws:s3:::test",
          "arn:aws:s3:::test/*"
    ]
    }
  ]
}

```


So we need to generate some code to consitinously transcribe 
- so almost real time transcription but we need to 

## API 
To transcribe the API I am using is the amazon transcribe aPI

suppose we have a 30 minute consultation 
- we need 

use aws to deploy this model 


![[content/Machine Learning/Deployment/AWS/Screenshot.png]]
## Final implementation