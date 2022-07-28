# PORT FORWARD
NS=NAME-SPACE
kubectl -n $NS port-forward service/grpcport 16565:6565