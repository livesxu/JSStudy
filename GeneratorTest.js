function* next_id(){
    while(i >= 0) {
        yield ++i;
    }
    return;
}