## Mini kube
```
.\minikube.exe start --vm-driver=virtualbox
minikube start
minikube start --vm-driver=virtualbox --show-libmachine-logs
kubectl run hello-minikube --image=k8s.gcr.io/echoserver:1.10 --port=8080
kubectl apply -f https://k8s.io/examples/application/deployment.yaml
kubectl expose deployment nginx-deployment --type=NodePort
curl $(minikube service nginx-deployment --url)
echo $(minikube service nginx-deployment --url)
kubectl delete services hello-minikube
kubectl delete deployment hello-minikube
minikube dashboard
```