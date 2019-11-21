## Minikube
```
.\minikube.exe start --vm-driver=virtualbox
minikube start
minikube start --vm-driver=virtualbox --show-libmachine-logs
minikube start --vm-driver=none
kubectl run hello-minikube --image=k8s.gcr.io/echoserver:1.10 --port=8080
kubectl apply -f https://k8s.io/examples/application/deployment.yaml
kubectl expose deployment nginx-deployment --type=NodePort
curl $(minikube service nginx-deployment --url)
echo $(minikube service nginx-deployment --url)
kubectl delete deployment hello-minikube
kubectl delete services hello-minikube
minikube dashboard
```

## Kubectl Command

[https://kubernetes.io/docs/reference/kubectl/kubectl/](https://kubernetes.io/docs/reference/kubectl/kubectl/)


## Pod
```
kubectl get pods
kubectl exec -ti nodejs-deployment-5d459f584b-m57rw /bin/sh
kubectl exec -ti nodejs-deployment-5d459f584b-dk5rg env
for debug container command: [ "/bin/sh", "-c", "sleep 10000" ]
command: [ "/bin/sh", "-c", "nginx -g 'daemon off;'" ]
kubectl run testalpine -ti --image=nginx:1.17.6-alpine /bin/sh
kubectl describe po/nodejs-deployment-5d459f584b-m57rw
```

## Deployment
```
kubectl create -f k8s-deployment.yaml 
kubectl get deployments
kubectl describe deployment/nodejs-deployment
kubectl delete deployment nodejs-deployment
```

## Service
```
kubectl get services
kubectl get service nginx-service --watch
kubectl describe service/nodejs-service
kubectl delete services hello-minikube
```

## DNS
```
kubectl get services kube-dns --namespace=kube-system
kubectl run curl --image=radial/busyboxplus:curl -i --tty
nslookup my-nginx
```